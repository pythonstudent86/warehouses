import json
from docx import Document

if __name__ == "__main__":
    document = Document("./docx/temFile.docx")
    data = []
    table = document.tables[0]
    for i, row in enumerate(table.rows):
        for text in row.cells:
            data.append(text.text)

    for item in data[0:4:]:
        data.remove(item)

    splied_list = []
    temp = []
    for k in data:
        temp.append(k)
        if len(temp) == 4:
            splied_list.append(temp)
            temp = []

    position_dict = {}
    location = []

    for position in splied_list:
        location = position[1].split()
        position_dict[f"row{splied_list.index(position) + 1}"] = {"num": position[0], "name": position[1],
                                                                  "quantity": position[2], "price": position[3],
                                                                  "location": location[len(location) - 1]}

    with open("output.json", "w+", encoding="utf-8") as f:
        json.dump(position_dict, f, ensure_ascii=False)
