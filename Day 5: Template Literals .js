/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const [area, perimeter] = expressions

    const sqrt = Math.sqrt((perimeter * perimeter) - 16 * area)
    const side1 = (perimeter + sqrt)/4
    const side2 = (perimeter - sqrt) / 4

    return [side1,side2].sort() 
}