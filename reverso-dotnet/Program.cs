using System;

namespace reverso
{
  class Program
  {
    static string Reverso(string text)
    {
      char[] charArray = text.ToCharArray();
      Array.Reverse(charArray);
      return new string(charArray);
    }

    static void Main(string[] args)
    {
      Console.WriteLine(Reverso(args[0]));
    }
  }
}
