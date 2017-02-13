package co.com.bnpparibas.cardif.mc.controllers;



public interface BookService {
    public Book getBook(long id);

    public long addBook(Book book);

    public long getBookCount();
}
