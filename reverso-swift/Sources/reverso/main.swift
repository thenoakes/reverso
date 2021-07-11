// Modules follow the file system - so this file and cli.swift are part of the reverso module

let cli = ReversoCli()

do {
    try cli.run()
} catch {
    print("Whoops! An error occurred: \(error)")
}
