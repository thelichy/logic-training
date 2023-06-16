use std::cmp::{ Ord, Ordering };


fn main() {
    let list = vec![1, 2, 3, 5, 6, 7, 9, 20, 30, 54];
    let item = 7;

    match binary_search(&list, item, 0, list.len(), None) {
        Some(r) => println!("{} found at: {}", item, r),
        None => println!("{} was not found", item),
    };
}

fn binary_search<T: Ord>(
    list: &[T],
    item: T,
    min: usize,
    max: usize,
    last: Option<usize>
) -> Option<usize> {
    let mid: usize = (max + min) / 2;

    if min > max || max < min || mid == last.unwrap_or(list.len()) {
        return None;
    }

    match list[mid].cmp(&item) {
        Ordering::Equal => Some(mid),
        Ordering::Greater => binary_search::<T>(&list, item, min, mid, Some(mid)),
        Ordering::Less => binary_search::<T>(&list, item, mid, max, Some(mid)),
    }
}
