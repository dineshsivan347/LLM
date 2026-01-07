# 🚀 Virtual Classroom System - Quick Start Guide

## Prerequisites
- Backend server running on `http://localhost:3000`
- Frontend running on `http://localhost:5173` (or your Vite port)
- User must be logged in with role: `teacher` or `student`

---

## 🎯 Testing the System

### Step 1: Restart Backend (If Needed)
The backend may need a restart to load the new entities:

```bash
cd backend
# Stop the current process (Ctrl+C in the terminal)
npm run start:dev
```

**Expected Output:**
```
[Nest] INFO [NestFactory] Starting Nest application...
[Nest] INFO [InstanceLoader] TypeOrmModule dependencies initialized
[Nest] INFO [InstanceLoader] ClassroomsModule dependencies initialized
[Nest] INFO [RoutesResolver] ClassroomsController {/classrooms}:
[Nest] INFO   Mapped {/classrooms, POST} route
[Nest] INFO   Mapped {/classrooms/join, POST} route
[Nest] INFO   Mapped {/classrooms/user/:userId, GET} route
[Nest] INFO Application is running on: http://localhost:3000
```

### Step 2: Verify Backend is Running

**Windows PowerShell:**
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/classrooms/user/test?role=teacher" -UseBasicParsing
```

**Expected:** Should return `[]` (empty array) or existing classrooms

---

## 👨‍🏫 Teacher Workflow Test

### 1. Create a Classroom

**Navigate to:** `/classroom`

**Actions:**
1. Click **"Create Class"** button (top right)
2. Fill in the modal:
   - **Subject Name:** "Advanced Algorithms 2024"
   - **Classroom Code:** "ALGO-2024-A" (must be unique)
3. Click **"Deploy Class"**

**Expected Result:**
- Modal closes
- Alert: "Classroom created!"
- New classroom card appears in the grid
- Card shows:
  - Subject name
  - Classroom code
  - Teacher name (your name)
  - "Enter Class →" link

### 2. Open the Classroom

**Actions:**
1. Click on the classroom card or "Enter Class →"

**Expected Result:**
- Large banner with classroom name and code
- Sidebar showing:
  - Role badge: "TEACHER"
  - Metrics: 0 Assessments, 0 Materials
  - Navigation tabs
- Main area showing "Stream" tab with action buttons

### 3. Post an Assessment

**Actions:**
1. In Stream tab, click **"Draft Assessment"**
2. Fill in the modal:
   - **Challenge Title:** "Binary Tree Traversal"
   - **Deadline:** "Next Friday"
   - **Detailed Objective:** "Implement inorder, preorder, and postorder traversal methods for a binary tree"
   - **Test Cases:**
     - Input: `root = [1,null,2,3]`
     - Output: `[1,3,2]`
   - Click "+ Add validation node" to add more cases
3. Click **"Deploy to Classroom"**

**Expected Result:**
- Modal closes
- Assessment appears in timeline feed
- Metrics update: "1 Assessments"
- Can see assessment in "Classwork" tab

### 4. Post Learning Material

**Actions:**
1. In Stream tab, click **"Publish Material"**
2. Fill in the modal:
   - **Material Focus:** "Introduction to Binary Trees"
   - **Transmission Payload:** "Binary trees are hierarchical data structures..."
3. Click **"Publish Curricula"**

**Expected Result:**
- Modal closes
- Material appears in timeline feed
- Metrics update: "1 Materials"
- Can see material in "Classwork" tab

### 5. View Performance Analytics

**Actions:**
1. Click **"Analytics Dashboard"** in sidebar
2. View the performance metrics

**Expected Result:**
- Three metric cards showing:
  - Class Equilibrium: 0% (no submissions yet)
  - Total Executions: 0
  - Enrolled Nodes: 0 (no students yet)
- Empty assessment analytics (waiting for submissions)

---

## 👨‍🎓 Student Workflow Test

### 1. Join a Classroom

**Navigate to:** `/classroom`

**Actions:**
1. Click **"Join Class"** button
2. Enter the classroom code: **"ALGO-2024-A"**
3. Click **"Authorize Join"**

**Expected Result:**
- Alert: "Joined successfully!"
- Modal closes
- Classroom appears in student's dashboard
- Card shows teacher name and subject

### 2. View Classroom Content

**Actions:**
1. Click on the classroom card
2. Explore the tabs

**Expected Result:**
- Sidebar shows:
  - Role badge: "STUDENT"
  - Metrics: 1 Assessment, 1 Material
- Stream tab: Shows posted assessments and materials
- Classwork tab:
  - Materials section with "Download PDF" button
  - Assessments section with "Initiate Challenge" button

### 3. Take an Assessment

**Actions:**
1. Navigate to "Classwork" tab
2. Find the "Binary Tree Traversal" assessment
3. Click **"Initiate Challenge"**

**Expected Result:**
- Redirects to `/practice/two-sum` (or dynamic assessment workspace)
- Student can write code and submit
- Submission is recorded in backend

---

## 🔍 Verification Checklist

### Backend API Tests

**Test Create Classroom:**
```powershell
$body = @{
    subjectName = "Test Subject"
    classroomCode = "TEST-001"
    teacherId = "teacher-123"
    teacherName = "Dr. Smith"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/classrooms" `
    -Method POST `
    -Body $body `
    -ContentType "application/json" `
    -UseBasicParsing
```

**Test Join Classroom:**
```powershell
$body = @{
    code = "TEST-001"
    studentId = "student-456"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/classrooms/join" `
    -Method POST `
    -Body $body `
    -ContentType "application/json" `
    -UseBasicParsing
```

**Test Get Classrooms:**
```powershell
# For teacher
Invoke-WebRequest -Uri "http://localhost:3000/classrooms/user/teacher-123?role=teacher" -UseBasicParsing

# For student
Invoke-WebRequest -Uri "http://localhost:3000/classrooms/user/student-456?role=student" -UseBasicParsing
```

### Frontend UI Tests

- [ ] Classroom list loads without errors
- [ ] Create classroom modal opens and closes
- [ ] Join classroom modal opens and closes
- [ ] Classroom cards display correctly
- [ ] Clicking classroom navigates to detail page
- [ ] Sidebar navigation works
- [ ] Tab switching works smoothly
- [ ] Modals have smooth animations
- [ ] Loading states display properly
- [ ] Empty states show appropriate messages
- [ ] Role-based content renders correctly

---

## 🐛 Troubleshooting

### Backend Not Responding

**Issue:** API calls fail with "connection refused"

**Solution:**
1. Check if backend is running: `netstat -ano | findstr :3000`
2. If not running, restart: `npm run start:dev` in backend folder
3. Wait for "Application is running" message
4. Check for TypeScript errors in terminal

### Database Errors

**Issue:** "SQLITE_ERROR: no such table: classrooms"

**Solution:**
1. Delete `database.sqlite` file
2. Restart backend (will auto-create tables)
3. TypeORM synchronize is enabled in development

### Frontend Errors

**Issue:** "Cannot read property 'map' of undefined"

**Solution:**
1. Check if API is returning data
2. Verify user is logged in
3. Check browser console for detailed errors
4. Ensure `cls.assessments` and `cls.materials` have fallback: `cls.assessments?.map(...)`

### CORS Errors

**Issue:** "Access-Control-Allow-Origin" error

**Solution:**
1. Backend should have CORS enabled
2. Check `main.ts` has: `app.enableCors()`
3. Restart backend if needed

---

## 📊 Expected Database Schema

After first run, check database:

```powershell
cd backend
sqlite3 database.sqlite ".schema"
```

**Expected Tables:**
- `classrooms` - Main classroom data
- `assessments` - Coding challenges
- `materials` - Learning resources
- `submissions` - Student submissions
- `users` - User accounts

---

## 🎉 Success Indicators

### Teacher View
✅ Can create classrooms with unique codes  
✅ Can post assessments with test cases  
✅ Can upload learning materials  
✅ Can view performance analytics  
✅ Can see student submission lists  
✅ Can track average scores  

### Student View
✅ Can join classrooms with codes  
✅ Can view all enrolled classrooms  
✅ Can access posted assessments  
✅ Can download materials  
✅ Can initiate coding challenges  
✅ Can view personal progress  

### System Health
✅ Backend responds on port 3000  
✅ Frontend loads without errors  
✅ Database tables created automatically  
✅ API endpoints return valid JSON  
✅ Authentication context works  
✅ Role-based rendering functions  

---

## 🚀 Next Steps

Once basic functionality is verified:

1. **Integrate with Practice Workspace**
   - Link assessments to actual coding problems
   - Submit solutions from practice page
   - Record scores automatically

2. **Add Real-time Features**
   - WebSocket for live updates
   - Notification system
   - Live submission tracking

3. **Enhance Analytics**
   - Charts and graphs
   - Time-series data
   - Comparative analysis

4. **File Upload**
   - PDF materials
   - Video lectures
   - Code templates

5. **Discussion System**
   - Comments on assessments
   - Q&A threads
   - Peer collaboration

---

**Happy Teaching & Learning! 🎓**
