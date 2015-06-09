all:
	jekyll build

watch:
	(sleep 3 && open http://localhost:4000) &
	jekyll serve --watch

deploy:
	@rsync -ahvc ./_site/* static@kbl.io:public/production/kimboux/
