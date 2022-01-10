PM	= yarn

install:
	@$(PM) install

dev:
	@$(PM) run dev

build:
	@$(PM) run build

lint:
	@$(PM) run lint

start:
	@$(PM) run start

DEFAULT_GOAL:	install

.PHONY:	install \
	dev \
	build \
	lint \
	start \
