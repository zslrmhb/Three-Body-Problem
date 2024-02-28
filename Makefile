PHONY: github 

github:
	npm run build
	rm -rf docs
	cp -r build docs
	touch docs/.nojekyll
	git add -A
	git commit -m "update github pages"
	git push