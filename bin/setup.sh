# Simple and quick script that just replaces thene name
echo "Theme name in lowercase (no spaces or special characters):"
read -e THEME_NAME

for i in `grep -rl air-light * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air-light;${THEME_NAME};" $i $i; done
for i in `grep -rl Air-light * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;Air-light;${THEME_NAME};" $i $i; done
for i in `grep -rl air * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air-light;${THEME_NAME};" $i $i; done
for i in `grep -rl air * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;air_light_;${THEME_NAME}_;" $i $i; done
for i in `grep -rl air * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;Air_light_;${THEME_NAME}_;" $i $i; done
for i in `grep -rl airdev * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;airdev.test;${PROJECT_NAME}.test;" $i $i; done
for i in `grep -rl airwptheme * --exclude-dir=node_modules 2> /dev/null`; do LC_ALL=C sed -i '' -e "s;airwptheme.com;${PROJECT_NAME}.fi;" $i $i; done
