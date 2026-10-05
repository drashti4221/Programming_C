#include <stdio.h>
#include <string.h>

#define DAYS 7

void saveData(int minutes[]) {
    FILE *file = fopen("music_log.txt", "w");

    if (file == NULL) {
        printf("Error opening file!\n");
        return;
    }

    for (int i = 0; i < DAYS; i++) {
        fprintf(file, "%d\n", minutes[i]);
    }

    fclose(file);
    printf("Music listening data saved successfully!\n");
}

void loadData(int minutes[]) {
    FILE *file = fopen("music_log.txt", "r");

    if (file == NULL) {
        return;
    }

    for (int i = 0; i < DAYS; i++) {
        if (fscanf(file, "%d", &minutes[i]) != 1) {
            minutes[i] = 0;
        }
    }

    fclose(file);
}

void weeklyReport(int minutes[]) {
    int total = 0;
    int highest = 0;

    for (int i = 0; i < DAYS; i++) {
        total += minutes[i];

        if (minutes[i] > highest) {
            highest = minutes[i];
        }
    }

    float average = total / 7.0;

    printf("\n--- Weekly Music Report ---\n");
    printf("Total Listening: %d minutes\n", total);
    printf("Average Listening: %.2f minutes\n", average);
    printf("Highest Listening: %d minutes\n", highest);
}

void resetData(int minutes[]) {
    char choice;

    printf("Are you sure you want to reset your weekly data? (y/n): ");
    scanf(" %c", &choice);

    if (choice == 'y' || choice == 'Y') {

        for (int i = 0; i < DAYS; i++) {
            minutes[i] = 0;
        }

        FILE *file = fopen("music_log.txt", "w");

        if (file != NULL) {
            fclose(file);
        }

        printf("Weekly data has been reset successfully!\n");
    } else {
        printf("Reset cancelled.\n");
    }
}

int main() {

    int minutes[DAYS] = {0};
    int choice;

    loadData(minutes);

    while (1) {

        printf("\n===== MUSIC LISTENING LOGGER =====\n");
        printf("1. Log Daily Listening Minutes\n");
        printf("2. View Weekly Summary\n");
        printf("3. Reset Weekly Data\n");
        printf("4. Exit\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        if (choice == 1) {

            printf("\nEnter music listening minutes for 7 days:\n");

            for (int i = 0; i < DAYS; i++) {
                printf("Day %d: ", i + 1);
                scanf("%d", &minutes[i]);
            }

            saveData(minutes);

        } else if (choice == 2) {
            loadData(minutes);
            weeklyReport(minutes);

        } else if (choice == 3) {

            resetData(minutes);

        } else if (choice == 4) {

            printf("Thank you for using Music Listening Logger!\n");
            break;

        } else {

            printf("Invalid choice! Please try again.\n");
        }
    }

    return 0;
}