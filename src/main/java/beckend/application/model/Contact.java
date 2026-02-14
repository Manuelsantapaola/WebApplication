package beckend.application.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.List;
@Entity
public class Contact {
    @Id
    private Long id;
    private String streetName;
    private String city;
    private String houseNumber;
    private List<String> openingTime;

    public Contact() {
    }

    public Contact(String streetName, String city, String houseNumber, List<String> openingTime) {
        this.streetName = streetName;
        this.city = city;
        this.houseNumber = houseNumber;
        this.openingTime = openingTime;
    }

    public List<String> getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(List<String> openingTime) {
        this.openingTime = openingTime;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }
}
