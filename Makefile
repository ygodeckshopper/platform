PM	= yarn

install:
	@$(PM) install

dev:
	@$(PM) run dev

lint:
	@$(PM) run lint

start:
	@$(PM) run start

build:
	@$(PM) run build

test:
	@$(PM) run test

DEFAULT_GOAL:	install

.PHONY:	install \
	dev \
	lint \
	start \
	build \
	test \
