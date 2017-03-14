package com.sashqua.phonebook.controllers;

import com.sashqua.phonebook.entity.Phone;
import com.sashqua.phonebook.entity.PhoneBook;
import com.sashqua.phonebook.service.PhoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by sashqua on 3/13/17.
 */
@RestController
public class PhoneController {

    @Autowired
    private final PhoneService phoneService;

    public PhoneController(PhoneService phoneService) {
        this.phoneService = phoneService;
    }

    @RequestMapping(value = "/api/phones" ,  method = {RequestMethod.GET})
    public List<PhoneBook> getPhoneList() {
        return phoneService.findAll();
    }

    @RequestMapping(value = "/api/phones" ,  method = {RequestMethod.POST})
    public void setPhone(@RequestBody @Valid final PhoneBook phoneBook) {
        phoneService.createPhoneBook(phoneBook);
    }

    @RequestMapping(value = "/api/contact/{id}", method = {RequestMethod.GET})
    public PhoneBook getContact(@PathVariable("id") Integer id) {
        return phoneService.getContact(id);
    }

    @RequestMapping(value = "/api/contact/{id}", method = {RequestMethod.DELETE})
    public void deleteContact(@PathVariable("id") Integer id) {
        phoneService.deleteContact(id);
    }
}
