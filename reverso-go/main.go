package main

import (
	"fmt"
	"os"
)

func reverseStr(str string) (out string) {
	for _, s := range str {
			out = string(s) + out
	}

	return
}

func main() {
	fmt.Println(reverseStr(os.Args[1])) // Args[0] is the executable
}