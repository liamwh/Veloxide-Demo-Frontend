set dotenv-load := true

# Show available commands
default:
  @just --list --justfile {{justfile()}}

# Generate protos
protos:
    protoc --proto_path=. ./protos/helloworld.proto \
    --ts_out=src/lib

