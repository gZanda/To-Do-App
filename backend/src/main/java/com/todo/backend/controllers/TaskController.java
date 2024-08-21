package com.todo.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.todo.backend.models.Task;
import com.todo.backend.repositories.TaskRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
// Allow all origins to access the API
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @PostMapping("/new-task")
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    @GetMapping("/tasks")
    public Iterable<Task> getTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/task/{id}")
    public Task getTask(@PathVariable("id") int id) {
        return taskRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTask(@PathVariable("id") int id) {
        taskRepository.deleteById(id);
    }

}
