/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let equalObjects = 0
    objects.forEach(function(object) {
        ((objects.x == objects.y) ? equalObjects++: '') 
    })
    return equalObjects
}