//Topic 1.1 
//Object orientation revisted
//part one




var flyingSaucers;
    
function setup()
{
    createCanvas(1200,600);
    noStroke();
    
    flyingSaucers = [];
    for(var i = 0; i < 5; i++)
        {
            flyingSaucers.push(new FlyingSaucer(100 + i * 250, 100 ));
        }
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
   
    
    for(var i = 0; i < flyingSaucers.length; i++)
        {
             if(flyingSaucers[i].beam_on)
             {
                flyingSaucers[i].beam();
             }
            
            flyingSaucers[i].hover;
            flyingSaucers[i].draw();
            
        }
    
   
}

//function keyPressed()
//{
//    flyingSaucer.beam_on = true;
//}
//
//function keyReleased()
//{
//    flyingSaucer.beam_on = false;
//}

 function FlyingSaucer(x,y) 
{
     
    this.x = x;
    this.y = y;
    this.width = random(150,200);
    this.height = random(35, 125);
    this.numLights = 20;
    this.brightnesses = [];
    this.beam_on = false;
    this.hover = function()
    {
        this.x += random(-2,2);
        this.y += random(-2,2);
        
        if(this.beam_on == false && random() > 0.95)
            {
                this.beam_on = true;
            }
        else if (this.beam_on == true && random() > 0.5)
            {
                this.beam_on = false;
            }
    };

    this.draw = function()
    {
         //draw the flying saucer
    fill(175,238,238);
    arc(this.x,this.y,this.width/2,this.height*2,PI,TWO_PI)
    fill(150);
    arc(this.x,this.y,this.width,this.height,PI,TWO_PI);
    fill(50);
    arc(this.x,this.y,this.width,this.height/2,0,PI);
    
    
    
    this.hover();
    
    
    fill(255,255,0);
    var incr = this.width/this.numLights;
    for(var i = 0; i<this.numLights; i++)
        {
            fill(this.brightnesses[i] * 5);
            ellipse(this.x-this.width/2 + incr*i,
                    this.y,
                    5);
            this.brightnesses[i] += 2;
            this.brightnesses[i] = this.brightnesses[i]%255;
        }   
    }

    this.beam = function()
    {
        

        if(random() > 0.25)
            {
                fill(255,255,100,150);
                beginShape();
                vertex(this.x - this.width * 0.25, this.y);
                vertex(this.x + this.width * 0.25, this.y);
                vertex(this.x + this.width * 0.35, height-100);
                vertex(this.x - this.width * 0.35, height-100);
                endShape(CLOSE);
            }

    };

     for(var i = 0; i < this.numLights; i++)
    {
       this .brightnesses.push((i*10)%255);
    }
    
    }
    
  