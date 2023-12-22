const isPalindrome = (str) => str == str.split('').reverse().join(''); 


export default async (req, context) => {
    const { string } = context.params;
    const result = isPalindrome(string) ? 'palindrome' : 'not palindrome';
    return new Response(`Your string is ${result}`);
  };

export const config = {
  path: "/check-palindrome/:string"
};