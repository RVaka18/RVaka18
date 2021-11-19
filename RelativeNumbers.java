import java.util.Scanner;

public class RelativeNumbers
{
    public static void main(String[] args)
    {
        Scanner input = new Scanner(System.in);
        
        System.out.println("Pick a number!] ");
        int num1 = input.nextInt();
        
        //System.out.println("Pick a number! ");
        //int num2 = input.nextInt();
        
        boolean lessThan = num1 < num2;
        boolean equal = num1 == num2;
        boolean greaterThan = num1 > num2;
        
        System.out.println(num1 + " < " + num2 + " : " + lessThan);
        System.out.println(num1 + " == " + num2 + " : " + equal);
        System.out.println(num1 + " > " + num2 + " : " + greaterThan);
    }
}