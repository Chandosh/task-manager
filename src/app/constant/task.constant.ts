export const TaskConstant = { 
    apiRequests: {
        createTask: 'tests/tasks/create',
        updateTask: 'tests/tasks/update',
        deleteTask: 'tests/tasks/delete',
        listTask: 'tests/tasks/list',
        listUsers: 'tests/tasks/listusers'
    },
    textConstants: {
        applicationName: 'Task Manager',
        createTask: 'Create Task',
        notTriaged: 'Not Triaged',
        high: 'High', 
        medium: 'Medium',
        low: 'Low',
        changeAssignee: 'Change Assigne',
        editTask: 'Edit Task',
        deleteTask: 'Delete Task'
    },
    userPopup: {
        header: 'Select User',
        cancel: 'Cancel',
        select: 'Select',
    },
    taskPopup: {
        createHeader: 'Create Task',
        updateHeader: 'Update Task',
        cancel: 'Cancel',
        create: 'Create',
        update: 'Update',
        message: 'Message',
        dueDate: 'Due Date',
        priority: 'Priority',
        assigne: 'Assignee',
        messagePlaceholder: 'Enter Task Message',
        dueDatePlaceholder: 'Select Due date',
        selectPriority: 'Select Priority',
        selectAssignee: 'Select Assignee',
        messageRequired: 'Message field is mandatory',
    }

}