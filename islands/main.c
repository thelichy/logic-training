#include <stdio.h>
#include "island.h"


int main(int argc, char *argv[]) {
    Island *start = malloc(sizeof(Island));

    start->name = "Maldives";
    start->previous = NULL;
    start->next = NULL;    

    pushIsland(start, "Another island");
    displayIslands(start);

    freeIslands(start);
    return 0;
}
