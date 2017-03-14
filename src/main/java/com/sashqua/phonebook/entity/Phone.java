package com.sashqua.phonebook.entity;

/**
 * Created by sashqua on 3/13/17.
 */
public class Phone {

    final static int WORK_PHONE = 1;
    final static int HOME_PHONE = 2;
    final static int MOBILE_PHONE = 3;

    private Integer id;
    private Integer phbook_id;
    private String phoneNumber;
    private Integer phoneType;
    private boolean defaultUsage;

    public Phone() {
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Integer getPhoneType() {
        return phoneType;
    }

    public void setPhoneType(Integer phoneType) {
        this.phoneType = phoneType;
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
