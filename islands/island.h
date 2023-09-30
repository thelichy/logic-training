#include <stdio.h>
#include <stdlib.h>
#include <string.h>


typedef struct Island {
    char *name;
    struct Island *next;
    struct Island *previous;
} Island;


void pushIsland(Island *last, char *name);


void pushIsland(Island *last, char *name) {
    Island *newer = malloc(sizeof(Island));

    newer->name = strdup(name);
    newer->next = NULL;
    newer->previous = last;

    last->next = newer;
}



void freeIslands(Island *node)
{
    Island *current = node;

    for (; current != NULL; current = current->next) {
        free(current->name);
        free(current);
    }
}

void displayIslands(Island *start) {
    Island *current = start;

    for (; current != NULL; current = current->next) {
        printf("Island: %s\n", current->name);
    }
}
