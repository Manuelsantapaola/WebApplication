package beckend.application.controller;

import beckend.application.model.Contact;
import beckend.application.model.Product;
import beckend.application.service.ContactService;
import beckend.application.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")


public class ContactController {

    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

    @GetMapping("/contact")
    public Contact getContact() {
        return service.getContact();
    }
}
