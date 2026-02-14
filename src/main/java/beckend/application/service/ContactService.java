package beckend.application.service;

import beckend.application.model.Contact;
import beckend.application.model.Product;
import beckend.application.repository.ContactRepository;
import beckend.application.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    private final ContactRepository repo;
    private static final long SINGLE_CONTACT_ID = 1L;


    public ContactService(ContactRepository repo) {
        this.repo = repo;
    }

    public Contact getContact() {
       //return repo.findById(SINGLE_CONTACT_ID)
              //  .orElseThrow(() -> new IllegalStateException("Contact not seeded (id=1)"));
        return repo.findAll().get(0);
    }


}
