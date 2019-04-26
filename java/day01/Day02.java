
/**
 * Day02
 */
public class Day02 {

    public static void main(String[] args) {
        int num = 1;
        String word = switch (num) {
        case 1 -> "One";
        case 2 -> "Two";
        default -> "11";
        };
        System.out.println(word);

    }
}