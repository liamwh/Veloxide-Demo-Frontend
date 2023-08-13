set dotenv-load := true

# Show available commands
default:
  @just --list --justfile {{justfile()}}

# Generate protos using protobuf-ts
gen-protobuf-ts:
    protoc --proto_path=. ./protos/helloworld.proto --ts_out=src/lib --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts

