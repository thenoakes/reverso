import Foundation

extension String {
  func reverso() -> String {
    return String(self.reversed())
  }
}


public final class ReversoCli {
    private let arg: String

    // arguments[0] is the binary
    public init(arg: String = CommandLine.arguments[1]) { 
        self.arg = arg
    }

    public func run() throws {
        print(self.arg.reverso())
    }
}
