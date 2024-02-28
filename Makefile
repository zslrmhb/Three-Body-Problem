PHONY: github 

github:
	rm -rf docs
	npm run build
	cp -r build docs
	touch docs/.nojekyll
	git add -A
	git commit -m "update github pages"
	git push