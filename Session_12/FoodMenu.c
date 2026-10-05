#include <stdio.h>

struct FoodItem {
    char itemName[50];
    float price;
    float rating;
};

int main() {
    struct FoodItem menu[3] = {
        {"Paneer Pizza", 299.00, 4.5},
        {"Masala Dosa", 150.00, 4.3},
        {"Veg Biryani", 220.00, 4.6}
    };

    for (int i = 0; i < 3; i++) {
        printf("Item: %s\n", menu[i].itemName);
        printf("Price: %.2f\n", menu[i].price);
        printf("Rating: %.1f\n\n", menu[i].rating);
    }

    return 0;
}