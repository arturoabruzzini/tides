include <puzzlecutlib/puzzlecutlib.scad>

$fn = 120;

tolerance = 0.2;
inky_frame_width = 176.2;
inky_frame_height = 139.2;
total_frame_width = inky_frame_width + tolerance * 2;
total_frame_height = inky_frame_height + tolerance * 2;
display_width = 160;
display_height = 96;
display_pos_bottom = 20.1;

inky_frame_thickness = 3;

module frame_outline()
{
    difference()
    {
        square([ total_frame_width, total_frame_height ]);
        translate([ (total_frame_width - display_width) / 2, display_pos_bottom + tolerance ])
            square([ display_width, display_height ]);
    }
}

module frame_buttons()
{
    for (i = [-2:2])
    {
        translate([ total_frame_width / 2 - 4.5 / 2 + i * 32, 6.2, 0 ]) square([ 4.5, 4 ]);
    }
}

module frame_template()
{
    linear_extrude(height = 1) difference()
    {
        frame_outline();
        frame_buttons();
    }
}

module sun(offset = 0)
{
    translate([ 200, 155 ]) sphere(64 + offset);
}

module line_of_clouds(seed, number_of_clouds, width)
{
    avg_x_distance = width / number_of_clouds;
    cloud_size = rands(20, 40, number_of_clouds, seed);
    x_offset = rands(-10, 10, number_of_clouds, seed);
    y_offset = rands(-10, 10, number_of_clouds, seed);
    z_offset = rands(-0, 0, number_of_clouds, seed);
    for (i = [0:number_of_clouds - 1])
    {
        translate([ i * avg_x_distance + x_offset[i], cloud_size[i] + max(y_offset[i], 1), z_offset[i] ])
            sphere(cloud_size[i]);
    }
}

rod_radius = 20;

module cloud_top()
{

    translate([ 0, display_pos_bottom + display_height - 3 ])
        line_of_clouds(seed = 45, number_of_clouds = 19, width = total_frame_width - 10);

    // rod
    translate([ (total_frame_width - display_width) / 2, display_pos_bottom + display_height + rod_radius, 0 ])
        rotate([ 0, 90, 0 ]) cylinder(r = rod_radius, h = display_width);
}

module cloud_left()
{
    translate([ (total_frame_width - display_width) / 2 + 2, 0 ]) rotate([ 0, 0, 90 ])
        line_of_clouds(seed = 84, number_of_clouds = 14, width = total_frame_height + 5);

    // rod
    translate([ (total_frame_width - display_width) / 2 - rod_radius, display_pos_bottom, 0 ]) rotate([ -90, 0, 0 ])
        cylinder(r = rod_radius, h = display_height);

    // additional spheres to cover gaps
    translate([ -9, 70, 0 ]) sphere(20);
    translate([ -10, 100, 0 ]) sphere(20);
}

module cloud_bottom()
{
    translate([ total_frame_width, display_pos_bottom + 4 ]) rotate([ 0, 0, 180 ])
        line_of_clouds(seed = 48, number_of_clouds = 17, width = total_frame_width);

    // rod
    translate([ (total_frame_width - display_width) / 2, display_pos_bottom - rod_radius, 0 ]) rotate([ 0, 90, 0 ])
        cylinder(r = rod_radius, h = display_width);

    // additional spheres to cover gaps
    translate([ 10, 2, 0 ]) sphere(20);
}

module cloud_right()
{
    pos = total_frame_height - 20;
    translate([ total_frame_width - (total_frame_width - display_width) / 2 - 3, pos ]) rotate([ 0, 0, 270 ])
        line_of_clouds(seed = 48, number_of_clouds = 12, width = pos);

    // rod
    translate([ total_frame_width - (total_frame_width - display_width) / 2 + rod_radius, display_pos_bottom, 0 ])
        rotate([ -90, 0, 0 ]) cylinder(r = rod_radius, h = display_height);

    // additional spheres to cover gaps
    translate([ 188, 30, 0 ]) sphere(20);
    translate([ 185, 85, 0 ]) sphere(20);
}

module frameify()
{
    difference()
    {

        children(0);
        translate([ -200, -200, -200 ]) cube([ 600, 600, 200 ]);
        linear_extrude(inky_frame_thickness) square([ total_frame_width, total_frame_height ]);
        linear_extrude(height = 10) frame_buttons();
    }
}

module hanging_recess() 
{
    color("red") {
        translate([85, total_frame_height + 10, 7.9]) 
        rotate([0, 90, 0])
        linear_extrude(height = 50) 
        polygon([[0, 0], [0, 12], [8, 8], [8, 0]]);
    }
}

module frame_top()
{
    difference() {
        color("white") frameify()
        {
            difference()
            {
                cloud_top();
                sun();
            }
        }
        hanging_recess();
    }
}

module frame_left()
{
    color("white") frameify()
    {
        difference()
        {
            cloud_left();
            cloud_top();
        }
    }
}

module frame_bottom()
{
    color("white") frameify()
    {
        difference()
        {
            cloud_bottom();
            cloud_left();
        }
    }
}

module frame_right()
{
    color("white") frameify()
    {
        difference()
        {
            cloud_right();
            cloud_bottom();
            sun();
        }
    }
}

module frame_sun()
{
    color("yellow") frameify()
    {
        difference()
        {
            sun();
        }
    }
}

// frame_template();

frame_top();
// frame_left();
// frame_bottom();
// frame_right();
// frame_sun();


module frame_clouds()
{
    kerf = 0.1;
    color("white") frameify()
    {
        difference()
        {

            cloud();
            sun(kerf);
        }
    }
}

module frame_sun()
{
    color("yellow") frameify()
    {
        sun();
    }
}

module frame()
{

    difference()
    {

        union()
        {
            color("yellow") sun();

            color("white") cloud();
        }
        translate([ -200, -200, -200 ]) cube([ 600, 600, 200 ]);
        linear_extrude(inky_frame_thickness) square([ total_frame_width, total_frame_height ]);
        linear_extrude(height = 10) frame_buttons();
    }
}

module slice(thickness)
{
    translate([ 0, 0, -inky_frame_thickness ]) difference()
    {

        union()
        {
            color("yellow") sun();

            color("white") cloud();
        }
        translate([ -200, -200, -200 + inky_frame_thickness ]) cube([ 600, 600, 200 ]);
        translate([ -200, -200, inky_frame_thickness + thickness ]) cube([ 600, 600, 200 ]);
    }
}

module slice_with_border()
{

    thickness = 1;
    translate([ 0, 0, -thickness ]) difference()
    {
        border = 5;
        translate([ -border, -border, 0 ])
            cube([ total_frame_width + border * 2, total_frame_height + border * 2, thickness ]);
        translate([ 0, 0, -5 ]) cube([ total_frame_width, total_frame_height, 10 ]);
    }
    slice(thickness);
}

stampSize = [ 600, 600, 100 ]; // size of cutting stamp (should cover 1/2 of object)
xCut1 = [ -25, 200 ];          // locations of puzzle cuts relative to X axis center
yCut1 = [ -20, 160 ];          // for Y axis

cutSize = 20; // size of the puzzle cuts
kerf = -0.3;

module cutSliceInFour()
{
    x_offset = total_frame_height / 2 - cutSize / 2;
    y_offset = -total_frame_width / 2 - cutSize / 2;

    xMaleCut(offset = x_offset) yMaleCut(offset = y_offset) slice_with_border();

    xMaleCut(offset = x_offset) yFemaleCut(offset = y_offset) slice_with_border();

    xFemaleCut(offset = x_offset) yMaleCut(offset = y_offset) slice_with_border();

    xFemaleCut(offset = x_offset) yFemaleCut(offset = y_offset) slice_with_border();
}

module cutFrameInFour()
{
    x_offset = total_frame_height / 2 - cutSize / 2;
    y_offset = -total_frame_width / 2 - cutSize / 2;

    xMaleCut(offset = x_offset) yMaleCut(offset = y_offset) frame();

    xMaleCut(offset = x_offset) yFemaleCut(offset = y_offset) frame();

    xFemaleCut(offset = x_offset) yMaleCut(offset = y_offset) frame();

    xFemaleCut(offset = x_offset) yFemaleCut(offset = y_offset) frame();
}

// color("red") frame_outline();
// color("green") frame_buttons();
// frame_template();
// frame();
// cutFrameInFour();
// frame_clouds();
// frame_sun();
// slice_with_border();
// cutSliceInFour();