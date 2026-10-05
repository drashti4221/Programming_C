#include <stdio.h>

int main()
{
    int likes = 1500;
    int *ptrLikes = &likes;

    printf("Likes: %d\n", likes);
    printf("Address stored in ptrLikes: %p\n", (void *)ptrLikes);

    return 0;
}