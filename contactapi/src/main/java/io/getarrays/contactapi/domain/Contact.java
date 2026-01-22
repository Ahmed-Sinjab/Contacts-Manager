package io.getarrays.contactapi.domain;


import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

@Entity//defines that this class is an entity
@Getter//sets getters for fields
@Setter
@NoArgsConstructor//sets no args constructor
@AllArgsConstructor//sets all args constructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT)//ignores null fields in json response
@Table(name = "contacts")

public class Contact {
    @Id
    @UuidGenerator
    @Column(name = "id", unique = true, updatable = false)
    private String id;
    private String name;
    private String email;
    private String title;
    private String phone;
    private String address;
    private String status;
    private String photoUrl;

}
