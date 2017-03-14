package com.sashqua.phonebook.service;

import com.sashqua.phonebook.entity.Phone;
import com.sashqua.phonebook.entity.PhoneBook;

import java.util.List;

/**
 * Created by sashqua on 3/13/17.
 */
public interface PhoneService {
    List<PhoneBook> findAll();
    void createPhoneBook(PhoneBook phoneBook);
    PhoneBook editPhoneBook();
    void deletePhoneBook(Integer id);
}
