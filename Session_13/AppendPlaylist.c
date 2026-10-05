#include <stdio.h>

int main() {
    FILE *file;

    file = fopen("playlist.txt", "a");

    fprintf(file, "Perfect\n");
    fprintf(file, "Love Me Like You Do\n");

    fclose(file);

    printf("Two songs added successfully.\n");

    return 0;
}