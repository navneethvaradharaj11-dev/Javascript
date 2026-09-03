-- SQL schema for storing tasks in a database
-- Use this file to create the table structure for the task manager.

CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    due_date DATE,
    priority TEXT NOT NULL,
    category TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Example insert
-- INSERT INTO tasks (name, due_date, priority, category, completed)
-- VALUES ('Finish assignment', '2026-07-01', '🔴 High', '📚 Study', 0);
