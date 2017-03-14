package com.sashqua.phonebook.service;

import com.sashqua.phonebook.entity.Phone;
import com.sashqua.phonebook.entity.PhoneBook;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by sashqua on 3/13/17.
 */
@Service("phoneService")
public class PhoneServiceImpl implements PhoneService{

    static List<PhoneBook> allPhones = new ArrayList<>();

    @Override
    public List<PhoneBook> findAll() {
        return allPhones;
    }

    @Override
    public void createPhoneBook(PhoneBook phoneBook) {
        phoneBook.setId(allPhones.size() + 1);
        allPhones.add(phoneBook);
    }

    @Override
    public PhoneBook editPhoneBook() {
        return null;
    }

    @Override
    public void deletePhoneBook(Integer id) {

    }
}
