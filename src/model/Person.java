package model;

public class Person {
    private String name;
    private String email;
    private String phone;
    private String address;
    private String birthDate;
    private String objective;

    public Person(String name, String email, String phone, String address, String birthDate, String objective) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.birthDate = birthDate;
        this.objective = objective;
    }

    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getPhone() { return phone; }
    public String getAddress() { return address; }
    public String getBirthDate() { return birthDate; }
    public String getObjective() { return objective; }
}
