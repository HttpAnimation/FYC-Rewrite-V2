#include <gtk/gtk.h>
#include <json-glib/json-glib.h>
#include <stdlib.h>
#include <string.h>

// Function to launch the "FYC" application
void launch_fyc() {
    system("FYC");
}

// Callback function when a button is clicked
void on_button_clicked(GtkWidget *widget, gpointer data) {
    launch_fyc();
}

int main(int argc, char *argv[]) {
    GtkWidget *window;
    GtkWidget *grid;
    GtkWidget *button;
    gchar *filename = "mainbuttons.json";
    gchar *file_contents;
    gsize length;
    GError *error = NULL;
    JsonParser *parser;
    JsonObject *root;
    JsonArray *buttons;
    guint num_buttons, i;

    gtk_init(&argc, &argv);

    // Read contents of mainbuttons.json
    if (!g_file_get_contents(filename, &file_contents, &length, &error)) {
        g_printerr("Error reading file: %s\n", error->message);
        g_clear_error(&error);
        return 1;
    }

    // Parse JSON
    parser = json_parser_new();
    if (!json_parser_load_from_data(parser, file_contents, length, &error)) {
        g_printerr("Error parsing JSON: %s\n", error->message);
        g_clear_error(&error);
        return 1;
    }

    root = json_node_get_object(json_parser_get_root(parser));
    if (!root) {
        g_printerr("Invalid JSON root object.\n");
        return 1;
    }

    // Get the "buttons" array from JSON
    buttons = json_object_get_array_member(root, "buttons");
    if (!buttons) {
        g_printerr("Invalid or missing 'buttons' array in JSON.\n");
        return 1;
    }

    num_buttons = json_array_get_length(buttons);

    // Create GTK window
    window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    gtk_window_set_title(GTK_WINDOW(window), "Main Buttons");
    g_signal_connect(window, "destroy", G_CALLBACK(gtk_main_quit), NULL);

    // Create a grid layout
    grid = gtk_grid_new();
    gtk_container_add(GTK_CONTAINER(window), grid);

    // Create buttons based on JSON data
    for (i = 0; i < num_buttons; ++i) {
        JsonObject *button_data = json_array_get_object_element(buttons, i);
        const gchar *button_label = json_object_get_string_member(button_data, "label");

        // Create button
        button = gtk_button_new_with_label(button_label);
        g_signal_connect(button, "clicked", G_CALLBACK(on_button_clicked), NULL);
        
        // Add button to grid
        gtk_grid_attach(GTK_GRID(grid), button, 0, i, 1, 1);
    }

    gtk_widget_show_all(window);
    gtk_main();

    // Clean up
    g_object_unref(parser);
    g_free(file_contents);

    return 0;
}
