package beckend.application.repository;

import beckend.application.model.Contact;
import beckend.application.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface ContactRepository extends JpaRepository<Contact, Long> {
}

