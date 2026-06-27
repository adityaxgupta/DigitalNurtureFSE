package com.library.library_springboot;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookRepository bookRepository;

    // Spring Boot automatically injects the repository here
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // GET request to fetch all books
    @GetMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    // POST request to add a new book
    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }
}