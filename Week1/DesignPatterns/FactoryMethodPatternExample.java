public class FactoryMethodPatternExample {
    public static void main(String[] args) {
        // Use the factory to create a Word document
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();

        // Use the factory to create a PDF document
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();
    }
}

// Common interface for all documents
interface Document {
    void open();
}

// Concrete document types
class WordDocument implements Document {
    public void open() {
        System.out.println("Opening Word Document...");
    }
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening PDF Document...");
    }
}

// Abstract factory class
abstract class DocumentFactory {
    public abstract Document createDocument();
}

// Concrete factories for each document type
class WordDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}

class PdfDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}