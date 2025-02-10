package com.taskflow;
public class Task {

    private String id;
    private String description;
    private boolean completed;

    // Constructors
    public Task() {
    }

    public Task(String id, String description) {
        this.id = id;
        this.description = description;
        this.completed = false; // Default to not completed
    }


    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }


    @Override
    public String toString() {
        return "Task{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", completed=" + completed +
                '}';
    }
}