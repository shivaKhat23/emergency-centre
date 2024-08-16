package com.shiva.emergencycenter;

public enum Vendor {
    VENDOR1("vendor1"), VENDOR2("vendor2"), VENDOR3("vendor3"), VENDOR4("vendor4");

    private final String name;

    Vendor(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
