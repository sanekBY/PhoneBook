package com.sashqua.phonebook.service;

import com.sashqua.phonebook.entity.Phone;
import com.sashqua.phonebook.entity.PhoneBook;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
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
        try {
            phoneBook.setId(allPhones.size() + 1);
            allPhones.add(phoneBook);
        } catch (Exception ex) {
            System.out.println(ex);
        }
    }

    @Override
    public PhoneBook editContact(Integer id) {
        return null;
    }

    @Override
    public void deleteContact(Integer id) {
        try {
            Iterator<PhoneBook> iterator = allPhones.iterator();
            while (iterator.hasNext()) {
                PhoneBook phoneBook = iterator.next();
                if (phoneBook.getId() == id) {
                    iterator.remove();
                    break;
                }
            }
        } catch (Exception ex) {
            System.out.println(ex);
        }
    }


    @Override
    public PhoneBook getContact(Integer id) {
        try {
            for (PhoneBook phoneBook:allPhones) {
                if (phoneBook.getId() == id) return phoneBook;
            }
        } catch (Exception ex) {
            System.out.println(ex);
        }
        return null;
    }
}
