import java.util.Arrays;

public class SearchPlatform {
    public static void main(String[] args) {
        int[] productIds = { 101, 105, 110, 120, 135 };
        int target = 120;

        // Linear Search
        System.out.println("Linear Search index: " + linearSearch(productIds, target));

        // Binary Search
        System.out.println("Binary Search index: " + binarySearch(productIds, target));
    }

    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target)
                return i;
        }
        return -1;
    }

    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target)
                return mid;
            if (arr[mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;
    }
}