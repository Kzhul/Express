using System;
using System.Text;

namespace Express.Shared.Extensions
{
    public static class ByteExtension
    {
        public static string GetBase64(this byte[] source)
        {
            if (source == null) return string.Empty;
            return Convert.ToBase64String(source);
        }

        public static string GetString(this byte[] source, string encoding = "UTF8")
        {
            if (source == null) return string.Empty;
            switch (encoding)
            {
                case "UTF8":
                    return Encoding.UTF8.GetString(source);
                case "UTF7":
                    return Encoding.UTF7.GetString(source);
                case "ASCII":
                    return Encoding.ASCII.GetString(source);
                default:
                    return Encoding.UTF8.GetString(source);
            }
        }
    }
}
