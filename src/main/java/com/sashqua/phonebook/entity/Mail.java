package com.sashqua.phonebook.entity;

/**
 * Created by sashqua on 3/13/17.
 */
public class Mail {

    final static int HOME_EMAIL = 1;
    final static int WORK_EMAIL = 2;

    private Integer id;
    private Integer phbook_id;
    private String email;
    private Integer emailType;
    private boolean defaultUsage;

    public Mail() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getEmailType() {
        return emailType;
    }

    public void setEmailType(Integer emailType) {
        this.emailType = emailType;
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
