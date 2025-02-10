package com.taskflow;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tasks")  // Base URL for all task-related endpoints
public class TaskController {

    private final String DATA_FILE = "tasks.json";
    private final ObjectMapper objectMapper = new ObjectMapper().enable(SerializationFeature.INDENT_OUTPUT); // For JSON reading/writing

    // Helper method to load tasks from file
    private List<Task> loadTasks() {
        List<Task> tasks = new ArrayList<>();
        try {
            File file = new File(DATA_FILE);
            if (file.exists()) {
                tasks = objectMapper.readValue(file, objectMapper.getTypeFactory().constructCollectionType(List.class, Task.class));
            }
        } catch (IOException e) {
            System.err.println("Error loading tasks from file: " + e.getMessage());
            e.printStackTrace();
        }
        return tasks;
    }

    // Helper method to save tasks to file
    private void saveTasks(List<Task> tasks) {
        try {
            objectMapper.writeValue(new File(DATA_FILE), tasks);
        } catch (IOException e) {
            System.err.println("Error saving tasks to file: " + e.getMessage());
            e.printStackTrace();
        }
    }

    // 1. Add a task (POST /tasks)
    @PostMapping
    public Task addTask(@RequestBody Task task) {
        List<Task> tasks = loadTasks();
        // Generate a simple ID
        String newId = String.valueOf(System.currentTimeMillis());
        task.setId(newId);
        tasks.add(task);
        saveTasks(tasks);
        return task;  // Return the newly created task
    }

    // 2. Mark a task as completed (PUT /tasks/{id}/complete)
    @PutMapping("/{id}/complete")
    public Task markTaskAsComplete(@PathVariable String id) {
        List<Task> tasks = loadTasks();
        Optional<Task> optionalTask = tasks.stream().filter(t -> t.getId().equals(id)).findFirst();

        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.setCompleted(true);
            saveTasks(tasks);
            return task; // Return the updated task
        } else {
            // Handle task not found
            return null; // Or throw an exception/return error response
        }
    }

    // 3. Delete a task (DELETE /tasks/{id})
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable String id) {
        List<Task> tasks = loadTasks();
        tasks.removeIf(task -> task.getId().equals(id));
        saveTasks(tasks);
    }

    // 4. View the list of tasks (GET /tasks)
    @GetMapping
    public List<Task> getTasks() {
        return loadTasks();
    }

    // Test Endpoint
    @GetMapping("/test")
    public String testEndpoint() {
        return "To-Do App is running!";
    }
}