package com.sashqua.phonebook.entity;

/**
 * Created by sashqua on 3/13/17.
 */
public class Address {

    private Integer id;
    private Integer phbook_id;
    private String address;
    private boolean defaultUsage;

    public Address() {
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isDefaultUsage() {
        return defaultUsage;
    }

    public void setDefaultUsage(boolean defaultUsage) {
        this.defaultUsage = defaultUsage;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPhbook_id() {
        return phbook_id;
    }

    public void setPhbook_id(Integer phbook_id) {
        this.phbook_id = phbook_id;
    }
}
